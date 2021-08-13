'use strict';
const ejs = require('ejs');
// 指定ejs规则
ejs.delimiter = '?';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async renderIndex() {
    const { config } = this.app;
    let render;
    const layout = 'http://127.0.0.1:9000/dist/index.html';
    const res = await this.ctx.curl(layout, {
      dataType: 'text',
      method: 'GET',
    });
    if (res && res.data) {
      console.log(res.data);
      render = ejs.render(res.data);
    }
    console.log(123, config.baseDir);
    this.ctx.body = render;
  }
}

module.exports = HomeController;
