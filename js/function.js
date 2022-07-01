$(()=>{
  
  let nowIdx = 0;

  
  // 네비게이션
  const $gnb = $('header>nav>.gnb>li');
  const $lnb = $('header>nav>.gnb>li>.lnb');
  const $backGrd = $('header>.background');

  $gnb.on('mouseover',()=>{
    $backGrd.stop().fadeIn(100);
    $lnb.stop().slideDown();
  });
  $gnb.on('mouseout',()=>{
    $lnb.stop().slideUp();
    $backGrd.stop().fadeOut();
  }) // end of nav

  // 모바일 네비게이션
  const $m_btn = $('header>.btn-box');
  const $m_box = $('header>.mobile');
  const $m_gnb = $('header>.mobile>nav>.gnb>li>a');
  const $m_lnb = $('header>.mobile>nav>.gnb>li>.lnb');
  const $m_shadow = $('header>.mobile>.mob-shadow');

  $m_btn.on('click',(evt)=>{
    evt.preventDefault();

    $m_box.stop().toggle();
    $m_shadow.toggle();
    $m_lnb.stop().hide();

  });

  $m_gnb.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $m_gnb.index(evt.currentTarget);
    
    $m_lnb.eq(nowIdx).stop().slideToggle();
    $m_gnb.eq(nowIdx).parent().siblings().find('.lnb').stop().slideUp();
  });

  $m_shadow.on('click',()=>{
    $m_shadow.hide();
    $m_box.hide();
    $m_lnb.stop().hide();
  });

  // 배너
  const $slides = $('section>.banner>.slides>li');
  const $indicator = $('section>.banner>.pagination>li');
  

  const bannerAuto = ()=>{

   setInterval(()=>{

    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx=0;
    }
    $slides.stop().fadeOut().eq(nowIdx).fadeIn(1000).siblings().fadeOut();
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
   5000},5000);


  };

  $indicator.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $indicator.index(evt.currentTarget);
    

    $slides.stop().fadeOut().eq(nowIdx).stop().fadeIn(1000).siblings().fadeOut(1000);
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
  }); // end of banner


  // 철도서비스 메뉴 (list);
  
  const $servList = $('section>.service>.serv-list>li');
  const $totServ = $('section>.service>.map>.total');
  const $ktxServ = $('section>.service>.map>.ktx');

  $servList.eq(0).on('click',(evt)=>{
    evt.preventDefault();

    $ktxServ.stop().fadeOut();
    $totServ.stop().fadeIn();  
    $(evt.currentTarget).addClass('on').siblings().removeClass('on');
  });
  $servList.eq(1).on('click',(evt)=>{
    evt.preventDefault();

    $totServ.stop().fadeOut();
    $ktxServ.stop().fadeIn();  
    $(evt.currentTarget).addClass('on').siblings().removeClass('on');
  });

  // KORAIL 노선
  const $totList = $('section>.service>.map>.total>.total-list>li');
  const $totShadow = $('section>.service>.map>.total>.shadow');
  const $totClose = $totShadow.children('.close');
  const $totBox = $('section>.service>.map>.total>.total-box>li');

  $totList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $totList.index(evt.currentTarget);

    $totShadow.show();
    $totBox.eq(nowIdx).show();
  });

  $totClose.on('click',(evt)=>{
    evt.preventDefault();

    $totBox.hide();
    $totShadow.hide();
  });

  $totShadow.on('click',()=>{
    $totBox.hide();
    $totShadow.hide();
  });
  // KTX 노선
  const $ktxList = $('section>.service>.map>.ktx>.ktx-list>li');
  const $ktxShadow = $('section>.service>.map>.ktx>.shadow');
  const $ktxClose = $ktxShadow.children('.close');
  const $ktxBox = $('section>.service>.map>.ktx>.ktx-box>li');

  $ktxList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $ktxList.index(evt.currentTarget);

    $ktxShadow.show();
    $ktxBox.eq(nowIdx).show();
  });
  
  $ktxClose.on('click',(evt)=>{
    evt.preventDefault();

    $ktxBox.hide();
    $ktxShadow.hide();
  })

  $ktxShadow.on('click',()=>{
    $ktxBox.hide();
    $ktxShadow.hide();
  });

  
  // 게시판
  const $brdList = $('section>.board>.brd-list>li');
  const $notice = $('section>.board>.notice');
  const $report = $('section>.board>.report');
  
  $brdList.eq(0).on('click',(evt)=>{
    evt.preventDefault();

    $brdList.eq(0).addClass('on').siblings().removeClass('on');
    $report.stop().fadeOut(100);
    $notice.stop().fadeIn(100);
  });
  $brdList.eq(1).on('click',(evt)=>{
    evt.preventDefault();

    $brdList.eq(1).addClass('on').siblings().removeClass('on');
    $notice.stop().fadeOut(100);
    $report.stop().fadeIn(100);
  });
  
  // sns
  const $snsList = $('section>.sns>.list>li');
  const $sns = $('section>.sns>div');
  // const $twitter = $('section>.sns>.twitter');
  // const $facebook = $('section>.sns>.facebook');
  // const $blog = $('section>.sns>.blog');

  $snsList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $snsList.index(evt.currentTarget);

    $snsList.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $sns.eq(nowIdx).stop().fadeIn().siblings('div').stop().fadeOut();
  });

  // 페이지 로드시
  $(window).on('load',()=>{
    bannerAuto();
  });
});