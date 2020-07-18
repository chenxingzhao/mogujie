import {request} from "./request";

export function getDatall(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.lowNowPrice=itemInfo.lowNowPrice
    this.realPrice=itemInfo.lowNowPrice

  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.cFans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info,rule) {
    //images可能没有值 有些商品有 有些商品没有
    this.image=info.images ? info.images[0]: '';
    this.infos=info.set;
    this.sizes=rule.tables;
  }
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
