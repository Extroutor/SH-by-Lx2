import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  @Get(['/', '/index.hbs'])
  @Render('index')
  getIndexPage() {
    return { isLoggedIn: true };
  }

  @Get('/faq.hbs')
  @Render('faq')
  getFaqPage() {
    return { isLoggedIn: true };
  }

  @Get('/auth.hbs')
  @Render('auth')
  getAuthPage() {
    return { isLoggedIn: false };
  }

  @Get('/register.hbs')
  @Render('register')
  getRegisterPage() {
    return { isLoggedIn: false };
  }

  @Get('/post.hbs')
  @Render('post')
  getPostPage() {
    return { isLoggedIn: false };
  }
}
