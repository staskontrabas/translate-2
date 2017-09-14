import React from 'react';
import $ from 'jquery';
//import "./static/libs/carousel.js";
import { Link } from 'react-router'; 

const categoryList = [
  { id: '1', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '2', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '3', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '4', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '5', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '6', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '7', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' },
  { id: '8', url: 'compscopl', name: 'compscopl', href: '#', value: 'Компьютеры и комплектующие' }
];
const actionsList = [
  { id: '1', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' },
  { id: '2', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' },
  { id: '3', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' },
  { id: '4', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' },
  { id: '5', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' },
  { id: '6', url: 'compscopl', img: 'static/img/action_05.png', date: '14 октября 2014 — ...', title: 'Купоны — наши еженедельные скидки на товары!', href: 'action-detail.html' }
];
const newsList = [
  { id: '1', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '2', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '3', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '4', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '5', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '6', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
]

export class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <Link className="header__menu" href="#">
        <span className="icon icon_gamburger" />
      </Link>
      <Link className="header__logo" href="index.html">
        <span className="icon icon_xcom-logo" />
      </Link>
      <div className="header__right-menu">
        <Link className="header__search" data-type="open-search" href="#">
          <span className="icon icon_header-search" />
        </Link>
        <Link className="header__cart" href="/basket.html">
          <span className="icon icon_shoping-cart" />
          <span className="badge badge_type_danger badge_absolute badge_pos_top-right">2</span>
        </Link>
      </div>
    </div>
    );
  }
}

const BreadcrumbsItem = ({path, name}) => (
  <span>
    <Link to={path}>{name}</Link>
    <span className='icon icon_breadcrumbs-delimeter'></span>
  </span>
);

export const Breadcrumbs = ({routes}) => {
  let path = '';
  return (
    <div className='breadcrumbs'>
      <div className='breadcrumbs__wrap'>
        {routes.map((route, i) => (
          route.path && route.name && <BreadcrumbsItem key={i} path={i > 1 ? path += '/' + route.path : path += route.path} name={route.name} />
        )
      )}
      </div>
    </div>
  );
};

export const RadioBtn = () => {
  return (
    <div className="radio-group radio-group_home radio-group_align-center radio-group_ident">
      <label className="radio">
        <input className="radio radio__input" data-link="js-tab-1" name="group" type="radio" defaultChecked="true"/>
        <span className="radio__text">Для офиса</span>
      </label>
      <label className="radio">
        <input className="radio radio__input" data-link="js-tab-2" name="group" type="radio" />
        <span className="radio__text">Для дома</span>
      </label>
    </div>
  );
}

const Content = ({content}) => {
    return (
      <div className="content">
        <RadioBtn/>
        <Tabs content={content}/>
      </div>
    );
}

const Tabs = ({content}) => {
    return (
      <div className="tabs">
        <div className="tab__item tab__item_active">
        {content}
        </div>
      </div>
    );
}

const CatAct = () => {
  return (
    <div className="layout layout_ident">
      <div className="layout__col layout__col_ident_right">
        <Link to='/catalog' className="link button button_size_large button_catalog button_text_directions-left">
          <span className="icon icon_catalog" />
          Каталог товаров
          <span className="icon icon_chevron-white icon_directions-right" />
        </Link>
      </div>
      <div className="layout__col layout__col_ident_left">
        <Link to='/actions' className="link button button_size_large button_actions button_text_directions-left">
          Акции и спецпредложения
          <span className="icon icon_chevron icon_directions-right" />
        </Link>
      </div>
    </div>
  )
}

/*
class CarouselNews extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.somePlugin();
  }
}*/

//const News = () => {
class NewsCarousel extends React.Component {
  componentDidMount() {
    console.log('start',this.el);
    /*
    this.$el = $(this.el);
    this.$el.each(function(index, el) {
       var sliderOwl = $(this),
          sliderParametrs = {},
          attrParametrs = $(this).attr('data-options');
      if (typeof attrParametrs != 'undefined')
        sliderParametrs = JSON.parse(attrParametrs);
      sliderOwl.owlCarousel(sliderParametrs);
    });
    */
  }
  componentWillUnmount() {
    //$(this.el).trigger('destroy.owl.carousel');
  }
  render() {
    return (
      <div className="carousel last-articles-list" data-options='{"autoWidth":true,"dots":false}' ref={el => this.el = el} >
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
        <a className="last-article" href="news-detail.html">
          <span className="last-article__img">
            <img src="static/img/slide-news-image_01.png" />
          </span>
          <span className="last-article__text">
            <span className="last-article__title">
              Первые видеокарты семейств NVIDIA GeForce GTX 1050 и GTX 1050 Ti уже в продаже
            </span>
            <span className="last-article__date">16 января</span>
          </span>
        </a>
      </div>
    );
  }
}
class News extends React.Component {
  render() {
    return (
      <div className="layout layout_ident_left">
        <Link className="link link_category" to="/news">Новости</Link>
        <NewsCarousel/>
      </div>
    );
  }
}


const CategoryItem = ({href, value}) => {
  return (
    <Link className="category__item" href="/category.html">
      <span className="category__icon">
        <span className="icon icon_folder" />
      </span>
      <span className="category__text">
        <span className="text text_size_large">Комплектующие</span>
      </span>
    </Link>
  );
}
const CategoryList = () => {
  //console.log(categoryList);
  return (
    <div className="category-list-wrapper">
      {categoryList.map((cat, i) => (
        <CategoryItem key={i} url={cat.url} value={cat.value} />
      ))}
    </div>
  );
}
export const Catalog = () => {
  return (
      <CategoryList/>
  );
}


export const ActionDetail = () => {
  return (
    <div className="action-detail">
      <div className="layout layout_ident">
        <h1>Бонусные баллы Икском</h1>
        <span>1 мая 2016 — …</span>
      </div>
      <img alt="" src="static/img/action-detail_img.jpg" />
      <div className="layout layout_ident">
        <b>Оплата заказов бонусными баллами</b>
        <p>
          Покупать в нашем магазине теперь еще выгоднее и удобнее!
          <br/>
            С каждой покупкой на ваш счет начисляются бонусные баллы, которые впоследствии можно будет использовать при покупке любых товаров в нашем магазине.
        </p>
          <b>Что такое бонусные баллы Икс-Ком?</b>
        <p>
            Бонусные баллы Икс-ком — это НЕ электронные деньги, НЕ валюта, не платежное средство,
            <br/>
              их нельзя получить физически, конвертировать в какой-либо вид денег и т. п. Бонусные баллы Икс-Ком — это индикатор активности покупателя в Интернет-магазинах Икс-Ком — xcom-shop. ru, xcom-dom. ru. Чем выше активность покупателя, тем бо́льшую скидку, строго пропорциональную предыдущим оплаченным покупкам в наших магазинах, получает покупатель. Скидки предоставляются в соотношении 1 рубль = 1 бонусный балл Икс-Ком.
            <b>Откуда берутся баллы?</b>
        </p>
        <p>Баллы начисляются после оплаты заказа. Заказ может быть оплачен любым способом.</p>
      </div>
    </div>
  );
}
const ActionItem = ({act}) => {
  return (
    <Link className="actions-item" to={`/actions/${act.id}`}>
      <img className="actions-item__img" src={act.img} />
      <span className="actions-item__text">
        <span className="actions-item__date">{act.date}</span>
        <span className="actions-item__title">{act.title}</span>
      </span>
    </Link>
  );
}
export const ActionList = () => {
  //console.log(categoryList);
  return (
    <div className="actions-list">
      {actionsList.map((act, i) => (
        <ActionItem key={i} act={act} />
      ))}
    </div>
  );
}

export const NewsDetail = () => {
  return (
    <div className="news-detail">
      <div className="layout layout_ident">
        <span>16 января 2017</span>
        <h1>NEC PA302W-SV2: 30-дюймовый монитор для профессионалов</h1>
        <p>
          Новый профессиональный монитор NEC PA302W-SV2 оснащен 10-битной панелью AH-IPS и светодиодной подсветкой GB-R. По данным производителя, устройство сочетает в себе высокую надежность, бескомпромиссное качество изображения, а также очень точное цветовоспроизведение. Дисплей готов работать в режиме 24 / 7 (с возможностью продления гарантийного обслуживания) и гарантирует безошибочное интенсивное визуальное отображение.
        </p>
        <img alt="" src="static/img/news-detail_01.jpg" />
        <b>Монитор 30 NEC PA302W-SV2</b>
        <p>
          В комплект поставки включено программное обеспечение SpectraView II. Оно функционирует в привязке к интегрированной функции SpectraView Engine и опциональным внешним сенсором для обеспечения идеальной аппаратной калибровки с реальными цветовыми оттенками. Благодаря датчику внешней освещенности и счетчику уровня выбросов углекислого газа данный дисплей обеспечивает профессиональную и в то же время экологичную эффективность и оказывает меньшее воздействие на окружающую среду на протяжении всего срока службы.
        </p>
        <p>
          NEC PA302W-SV2 создан для для работы с претенциозными приложениями, для творческих профессионалов, дизайнеров, фотографов, для работы с САПР/АПП, для специалистов по видеомонтажу, для финансовой сферы, инженеров-метрологов, а также для демонстрации медицинских изображений, для телевещания и промышленных приложений (например, NTD) и для всех тех, кто ценит качество визуальной работы. Прецизионную передачу деталей и цветов обеспечивает 10-битная матрица IPS и цифровой контроль равномерности Digital Uniformity Control. Также не обошлось без 14-битной аппаратной таблицы пересчета цветов.
        </p>
        <img alt="" src="static/img/news-detail_02.jpg" />
        <b>Монитор 30 NEC PA302W-SV2</b>
        <p>
          Монитор NEC PA302W-SV2 позволяет осуществлять мгновенную визуализацию в реальном времени. Он поддерживает раздельную эмуляцию цветового пространства с помощью трехмерной таблицы пересчета цветов 3D LUT и функцию картинка-в-картинке. Можно добиться точной имитации различных световых условий в зависимости от цвета бумаги.
        </p>
      </div>
    </div>
  );
}
const NewsItem = ({news}) => {
  return (
    <Link className="news-item" to={`/news/${news.id}`}>
      <span className="news-item__img-wrapper">
        <img className="news-item__img" src={news.img} />
      </span>
      <span className="news-item__text">
        <span className="news-item__date">{news.date}</span>
        <span className="news-item__title">{news.title}</span>
        <span className="news-item__info">{news.desc}</span>
      </span>
    </Link>
  );
}
export const NewsList = () => {
  return (
    <div className="news-list">
      {newsList.map((news, i) => (
        <NewsItem key={i} news={news} />
      ))}
    </div>
  );
}

export class App extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div className="page">
        <Header/>
        <Breadcrumbs routes={this.props.routes} />
        <Content content={this.props.children}/>
      </div>
    );
  }
}




/*
const userResolver = resolver(key(':userId')).then((_, keyValue) => userlist
    .filter((u) => u.id === keyValue)[0]
    .name
);

const itemResolver = resolver(key(':item1'), childOf(pathname('RouteName1'), path('parent')))
    .then((_, keyValue) => keyValue.toUpperCase());

const customResolver = (keyValue, text) => {
    if (keyValue === ':item2') {
        return `${keyValue}/${text}`;
    }
    return undefined;
};

const crumbResolver = combineResolvers(userResolver, itemResolver, customResolver, textResolver);

export const App = ({ routes, params, children }) => (
    <div className="animated fadeIn">
        <div>
            <Breadcrumbs routes={routes} params={params} createSeparator=" | " />
            <Breadcrumbs routes={routes} params={params} resolver={crumbResolver} />
            <div className="content">
                <h3>Navigation</h3>
                Users route: <Link to="users">Users</Link>
                <hr />
                Very long route: <Link to="/parent">Parent</Link>{" "}
                <Link to="/parent/child1">Child1</Link>{" "}
                <Link to="/parent/child1/item1">Item1</Link>{" "}
                <Link to="/parent/child1/item1/child2">Child2</Link>{" "}
                <Link to="/parent/child1/item1/child2/item2">Item2</Link>{" "}
                <Link to="/parent/child1/item1/child2/item2/child3">Child3</Link>{" "}
                <br />
                Second very long route: <Link to="/parent-2">Parent-2</Link>{" "}
                <Link to="/parent-2/child1">Child1-2</Link>{" "}
                <Link to="/parent-2/child1/item1">Item1-2</Link>{" "}
                <Link to="/parent-2/child1/item1/child2">Child2-2</Link>{" "}
                <Link to="/parent-2/child1/item1/child2/item2">Item2-2</Link>{" "}
                <Link to="/parent-2/child1/item1/child2/item2/child3">Child3-2</Link>{" "}

                <h3>Deeplink</h3>
                <Link to="/context/publishers">Publishers</Link>{" "}
                <Link to="/context/publishers/myId">Publishers</Link>
                <h3>Content</h3>
                {children}
            </div>
        </div>
    </div>
);

export const Info = () => (
    <div>
        <div>
            The breadcrumbs will use the route names for non-dynamic
            routes or the parameter value for :item1 and :item2.
        </div>
    </div>
);

export const NoMatch = () => (
    <div>
        <div>
            <Breadcrumbs routes={this.props.routes}/>
        </div>
    </div>
);

export class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: { id: 0, name: '', img: '' } };
    }

    componentDidMount() {
        this.setUserState();
    }

    componentWillUpdate(nextProps) {
        if (this.state.user.id !== nextProps.params.userId) {
            this.setUserState();
        }
    }

    setUserState() {
        this.setState({
            user: this.findUserById(this.props.params.userId)[0]
        });
    }

    findUserById(id) {
        return userlist.filter((item) => item.id === id);
    }

    render() {
        return (
            <div>
                <div>
                    <hr />
                    This is what we know:
                    <br />ID: {this.state.user.id}
                    <br />NAME: {this.state.user.name}
                </div>
            </div>
        );
    }
}

export class UserImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: { id: 0, name: '', img: '' } };
    }

    componentDidMount() {
        this.setUserState();
    }

    componentWillUpdate(nextProps) {
        if (this.state.user.id !== nextProps.params.userId) {
            this.setUserState();
        }
    }

    setUserState() {
        this.setState({
            user: this.findUserById(this.props.params.userId)[0]
        });
    }

    findUserById(id) {
        return userlist.filter((item) => item.id === id);
    }

    render() {
        return (
            <div>
                <div>
                    <hr />
                    This is what we know:
                    <img src={this.state.user.img} alt="Rambo"/>
                </div>
            </div>
        );
    }
}


export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: userlist };
    }

    componentWillMount() {
        if ('users' in this.props) {
            this.setState({ users: this.props.users });
        }
    }

    render() {
        return (
            <div>
                <h1>User List</h1>
                <div className="master">
                    <ul>
                        {this.state.users // eslint-disable-line newline-per-chained-call
                            .map((user) => (
                                <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                            ))}
                    </ul>
                </div>
                <div className="detail">

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export const User = (props) => (
    <div>
        <hr />
        You're one click away from learning everything we know
        about user no {props.params.userId}.<br />
        Click{" "}<strong>
        <Link to={`/users/${props.params.userId}/details`}>here</Link></strong> for more details.
        <Link to={`/users/${props.params.userId}/image`}>Images here</Link>
        <br />
        {props.children}
    </div>
);
export const PublishersPage = ({params}) => (
    <div>
        <h1>PublishersPage</h1>
        <span>{JSON.stringify(params)}</span>
    </div>
);
export const PublisherPageContainer = ({params}) => (
    <div>
        <h1>PublisherPageContainer</h1>
        <span>{JSON.stringify(params)}</span>
    </div>
);
*/