import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../db/module/users'
import Email from '../db/config'
import axios from '../interface/utils/axios'
import Passport from './utils/passport'
const router = new Router({
  prefix: '/users'
})
let Store = new Redis().client

router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body;
  global.console.log()
  if(code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期'
        }
        return false
      }
      // else {
      //   ctx.body = {
      //     code: -1,
      //     msg: '请填写正确的验证码'
      //   }
      //   return false
      // }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
      return false
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
    return
  }
    let user = await User.find({
      username
    })
    if (user.length) {
      ctx.body = {
        code: -1,
        msg: '已经被注册'
      }
      return
    }
    global.console.log(user,'user')
    let nuser = await User.create({
      username,
      password,
      email
    })
  global.console.log(nuser,'nuser')
    if (nuser) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: nuser.user
      }
      return
      // let res = await axios.post('/users/signin', {
      //   username,
      //   password
      // })
      // if (res.data && res.data.code === 0) {
      //   ctx.body = {
      //     code: 0,
      //     msg: '注册成功',
      //     user: res.data.user
      //   }
      // } else {
      //   ctx.body = {
      //     code: -1,
      //     msg: 'error'
      //   }
      // }
    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  // console.log(username, password, email, code)
})
router.get('/z', async (ctx, next) => {
  ctx.body ={
    name: '111'
  }
})
router.post('/signin', async (ctx,next) => {
  // return Passport.authenticate('local', function(err,user,info,status) {
  //   global.console.log(err,user,info,status)
  //   if(err) {
  //     ctx.body = {
  //       code: -1,
  //       msg: err
  //     }
  //   }else {
  //       if(user) {
  //         ctx.body = {
  //           code: 0,
  //           msg: '登录成功',
  //           user
  //         }
  //         return ctx.login(user)
  //       } else {
  //         ctx.body = {
  //           code: 1,
  //           msg: info
  //         }
  //       }
  //     }
  // })(ctx,next)
  const res =  await User.findOne({
    username: ctx.request.body.username,
    password: ctx.request.body.password
  })
  global.console.log(res,'res')
  if(res) {
    ctx.body = {
      code: 1,
      msg: '登录成功'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '登录失败'
    }
  }
})
router.post('/verify', async(ctx,next) => {
  global.console.log('11')
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
  if(saveExpire&&new Date().getTime()-saveExpire< 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟1次'
    }
    return false
  }
  //创建邮箱传输方式
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port:587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  //
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  console.log(ko,'ko')
  //邮箱需要发送的信息
  let mailOptions= {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: '《注册码》注册码',
    html:`您的邀请码是:${ko.code}`
  }
  //发送邮件
  await transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      ctx.body = {
        code: 0,
        msg: '验证码已发送'
      }
      return console.log('error')
    }else {
      //发送成功redis保存数据
      Store.hmset(`nodemail:${ko.user}`,'code',ko.code, 'expire',ko.expire,'email',ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送'
  }
})
//退出用户
router.get('/exit', async(ctx,next) => {
  await ctx.logout()
  if(!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  }else {
    ctx.body = {
      code: -1
    }
  }
})
//获取用户信息
router.get('/getUser', async (ctx) => {
  if(ctx.isAuthenticated()) {
    const {username, email} =ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  }else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router
