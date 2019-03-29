(() => {
  'use strict';

  const images = [
    { width: 1280, height: 720, url: 'http://www.tasteofcinema.com/wp-content/uploads/2015/10/Joe-2014.jpg' },
    { width: 885, height: 1009, url: 'https://peopledotcom.files.wordpress.com/2017/08/beverly-hills-hs-nicolas-cage.jpg' },
    { width: 777, height: 437, url: 'https://scifanatic-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/niccagepicard-deepfake-head1.jpg' },
    { width: 284, height: 177, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocMS5se3l_oxzDYMYU34GZe6CFWbpsrlBLYsBzeNBr6bmnEkn9w' },
    { width: 770, height: 308, url: 'http://br.web.img2.acsta.net/newsv7/15/07/31/17/08/005107.jpg' },
    { width: 896, height: 504, url: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/03/Nicolas-Cage-Superman-1.jpg' },
    { width: 290, height: 174, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFsgkCJYDxun3NgDztjV1Xqqp4mEJYIX2bkhKhjKA-_e4OjOM' },
    { width: 1413, height: 1009, url: 'https://i1.wp.com/judao.com.br/wp-content/uploads/2015/01/Nicolas-Cage-nicolas-cage-26969778-2560-1956.jpg' },
    { width: 800, height: 449, url: 'https://i.kinja-img.com/gawker-media/image/upload/s--y0OM6BOQ--/c_scale,f_auto,fl_progressive,q_80,w_800/iwpzjy3ggdpapoagr8av.jpg' },
    { width: 190, height: 190, url: 'http://nymag.com/daily/entertainment/upload/2011/01/nic_cage_slideshow/20110107_cage_190x190.jpg' },
    { width: 195, height: 258, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SQEh_vV-JoIB83Nu5s33gWZgYKYCu8t_CJ1e4eVP7B1hFm0a' },
    { width: 530, height: 298, url: 'https://lh3.googleusercontent.com/-WIzS9HW2GxU/V-nQ53-EKnI/AAAAAAAAGBY/bAg4t_7NAPQKIJ57XfkH_n7vjZelaTg9wCJoC/w530-h298-n-rw/16%2B-%2B1' },
    { width: 800, height: 450, url: 'https://i.kinja-img.com/gawker-media/image/upload/s--wCN81D_1--/c_scale,f_auto,fl_progressive,q_80,w_800/1429917285613338540.png' },
    { width: 620, height: 330, url: 'https://www.irishtimes.com/polopoly_fs/1.3376455.1517476651!/image/image.jpg_gen/derivatives/box_620_330/image.jpg' },
    { width: 1920, height: 820, url: 'http://www.roelpeters.be/wp-content/uploads/2017/04/yCZDpt6.png' },
    { width: 750, height: 375, url: 'https://amp.businessinsider.com/images/581cd69d46e27a1c008b4cd0-750-375.jpg' },
    { width: 800, height: 450, url: 'https://i.kinja-img.com/gawker-media/image/upload/s--jL3SlkjV--/c_scale,f_auto,fl_progressive,q_80,w_800/rjnwfglxmx4xe8rb3ypl.jpg' },
    { width: 210, height: 230, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQierAGU6T5YpmIXHqDVPyT1UtWab8cLw_njA1lVdcpWucXYwq' },
    { width: 222, height: 227, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsp4FF2a1EIv3L0ufCmSr-BewtpjNTDQ6K5tORocw1LNlaacvv' },
    { width: 780, height: 435, url: 'https://www.indiewire.com/wp-content/uploads/2018/01/nicolas-cage-sundance-studio-mandy.png?w=780' },
    { width: 792, height: 420, url: 'https://www.graciemag.com/wp-content/uploads/2019/03/Jiu-Jitsu-Movie-Nicolas-Cage.jpg' },
    { width: 960, height: 640, url: 'https://img.ibxk.com.br/2019/03/24/24200619939047.jpg' },
    { width: 780, height: 438, url: 'https://img1.grunge.com/img/gallery/crazy-true-facts-about-nicolas-cage/intro-1524758952.jpg' },
    { width: 640, height: 388, url: 'http://www.cineset.com.br/wp-content/uploads/2015/05/Festival_Venezia2013_Nicolas_Cage_Red_Carpet3.jpg' },
    { width: 760, height: 428, url: 'https://jovemnerd.com.br/wp-content/uploads/2018/09/nicolas-cage-meme-760x428.jpg' },
    { width: 259, height: 194, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLng77tFjuEZtMdVWnytf72R_P5JUV2eUmyZNwBwunVVzdNQmp8Q' },
    { width: 920, height: 584, url: 'https://assets.papelpop.com/wp-content/uploads/2018/07/Nicholas-Cage-920x584.jpg' },
    { width: 220, height: 279, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg' },
    { width: 960, height: 640, url: 'https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_nicolas-cage-460-jpg.jpg' },
    { width: 980, height: 630, url: 'https://ep00.epimg.net/elpais/imagenes/2016/06/16/icon/1466075020_152207_1466093301_noticia_normal.jpg' },
    { width: 1000, height: 563, url: 'https://pmcvariety.files.wordpress.com/2017/09/nicolas-cage-tiff.jpg?w=1000' },
    { width: 757, height: 505, url: 'https://www.cheatsheet.com/wp-content/uploads/2019/03/Nicolas-Cage.jpg' },
    { width: 1280, height: 720, url: 'http://celebrityinsider.org/wp-content/uploads/2019/03/Nicolas-Cage.jpg' },
    { width: 767, height: 431, url: 'https://img.maximummedia.ie/joe_co_uk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lY291ay5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbVxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAxN1xcXC8wN1xcXC8xMjA5MjY1NlxcXC9uaWMtY2FnZS0xMDI0eDUzOC5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmNvLnVrXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lY291a1xcXC9uby1pbWFnZS5wbmc_dj0yMlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1YTY0N2VmMmNmYjE5ZjY4MTQyNjRhMDQwMjAxNTBjOWRmODFmZjkxIn0=/nic-cage-1024x538.jpg' },
    { width: 870, height: 555, url: 'http://images-cdn.impresa.pt/caras/2011-07-21-nicolas-cage?v=w870h555' },
    { width: 214, height: 317, url: 'https://m.media-amazon.com/images/M/MV5BZmRlOTBlZWItMzE4Mi00YTUzLTgwYzAtY2U1ZDJlMjJlODU4XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UY317_CR10,0,214,317_AL_.jpg' },
    { width: 1793, height: 1009, url: 'https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2018/07/Nicolas-Cage-Background.jpg' },
    { width: 671, height: 1009, url: 'https://timedotcom.files.wordpress.com/2015/07/nicolas-cage1.jpg' },
    { width: 210, height: 312, url: 'https://media.fstatic.com/_mZ8XbP9fSRaoDrDf4qRIwxCXv8=/210x312/smart/media/artists/avatar/2013/12/nicolas-cage_a1706.jpg' },
    { width: 215, height: 290, url: 'http://br.web.img3.acsta.net/c_215_290/pictures/15/07/20/18/14/582462.jpg' },
    { width: 788, height: 1000, url: 'https://s2.glbimg.com/rFVvmYENHPexvM3VIlk-OfjONxs=/e.glbimg.com/og/ed/f/original/2018/07/06/nicolas_cage_-_66eme_festival_de_venise_mostra.jpg' },
    { width: 1008, height: 1008, url: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg' },
    { width: 245, height: 378, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/245px-Nicolas_Cage_Deauville_2013.jpg' },
    { width: 1420, height: 799, url: 'http://www.tasteofcinema.com/wp-content/uploads/2016/03/cage-wicker-man.jpg' },
    { width: 825, height: 464, url: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2016/07/nc_main.jpg?itok=I7iCNRCQ' },
    { width: 620, height: 349, url: 'http://trackingboard1.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/niccageNationalTreasure.jpg' },
    { width: 1280, height: 720, url: 'https://cdn-static.denofgeek.com/sites/denofgeek/files/2018/03/nicolas-cage-valley-girl.jpg' },
    { width: 1600, height: 938, url: 'http://cdn.collider.com/wp-content/uploads/2018/04/211-nicolas-cage-social.jpg' },
    { width: 285, height: 200, url: 'https://s3.amazonaws.com/s3.mp-cdn.net/78/29/418962a0667114cc64ff635e9cf1-is-nicolas-cage-a-good-actor.jpg' },
    { width: 300, height: 168, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2n5uq7TDTMxW6Yuhwdu9UztPYZHZXIQ316ha3gqfUeUrygATiQ' },
    { width: 600, height: 338, url: 'https://cdn3.whatculture.com/images/2015/05/kqUf1N5c-600x338.jpg' },
    { width: 280, height: 385, url: 'https://jamesostafford.files.wordpress.com/2012/02/nicolas-cage-young.jpg' },
    { width: 650, height: 488, url: 'https://img.clipd.com/filter:scale/slides/2/0/7/6/5/4/2076548854/cd1f12fc86c0f90c7a67a40f1ec5604991aec790.jpeg?mw=650' },
    { width: 550, height: 330, url: 'https://gunaxin.com/wp-content/uploads/2011/01/header.jpg' },
    { width: 540, height: 359, url: 'https://gunaxin.com/wp-content/uploads/2011/01/four.jpg' },
    { width: 539, height: 359, url: 'https://gunaxin.com/wp-content/uploads/2011/01/three.jpg' },
    { width: 472, height: 312, url: 'https://gunaxin.com/wp-content/uploads/2011/01/two.jpg' },
    { width: 535, height: 289, url: 'https://gunaxin.com/wp-content/uploads/2011/01/first.jpg' },
    { width: 259, height: 194, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUmSgyxC4sJQ_Gf0ueKsYvYH2zqFknvL75d6mDxSHhXq_MLXyPw' },
    { width: 275, height: 183, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKW9sHHbYQEzNpUc6GwYnR4RUMbsOTd4sIvSDsnptvDU46d_iKw' },
    { width: 300, height: 168, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSv57x7vCEtXrJamjHluUx1evWsSEcXmyqUFfDw-oedxI-Grt' },
    { width: 318, height: 159, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5oxrVwveu0upLkj7I0Vlf35nHS9_kIlLdCaNIg0XoUD5C-ncCQ' },
    { width: 696, height: 348, url: 'https://i1.wp.com/batman-news.com/wp-content/uploads/2017/10/nicolas-cage-superman-lives.jpg?resize=696%2C348&quality=80&strip=info&ssl=1' },
    { width: 625, height: 415, url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/9/20/campaign_images/webdr11/how-many-of-these-nicolas-cage-movies-have-you-se-2-6243-1423530385-17_dblbig.jpg' },
    { width: 615, height: 446, url: 'https://img.clipd.com/filter:scale/slides/1/2/5/4/4/5/1254456520/792881de2df344b753c7a7f31a8f03828769d606.jpeg?mw=615' },
    { width: 285, height: 177, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHVLa-v3DZyCcoUwRVLN598H1-WRYR41EvyMqe5yaBCI7-23g' },
    { width: 300, height: 168, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWFSLfE_M8-LF4hgXkkfwIwyfDg1USq_ujaihwKb-Yn0kaPmK' },
    { width: 344, height: 146, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiMKYtjbgewunLgJonEo0G7cT65RvpFTHCXAyX30H4KA2Huxi' },
    { width: 280, height: 180, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTsN1lEo2jm2ubjT10v8V_0h0oKz0mHEGHK9Q6DPnnyceydNE' },
  ];

  const proportions = images.reduce((accumulator, { width, height, url }) => {
    const proportion = Math.round(Math.ceil(width / height * 100) / 5 ) * 5 / 100;
    const copy = { ...accumulator };
    copy[proportion] = [...(copy[proportion] || []), url];
    return copy;
  }, {});

  const choose = ({ width, height }) => {
    const proportion = Math.round(Math.ceil(width / height * 100) / 5 ) * 5 / 100;

    const { key: closest } = Object.keys(proportions).reduce((accumulator, key) => {
      const current = parseFloat(key);
      const difference = Math.abs(proportion - current);
      const comparable = { difference, key };
      const copy = parseFloat(accumulator.difference === undefined ? difference : accumulator.difference);
      return difference > copy ? accumulator : comparable;
    }, {});

    const urls = proportions[closest];

    return urls[Math.floor(Math.random() * urls.length)];
  };

  window.onload = () => {
    const imgs = document.querySelectorAll('img');

    for (const img of imgs) {
      img.src = choose(img);
      img.style = `${img.style} max-width: 100%; max-height: 100%;`
    }
  };
})();