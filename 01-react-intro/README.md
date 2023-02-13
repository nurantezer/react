-React bir librarydir.Angular bir freamworktur.jsx kullanmak zorunda değilsin kullanırsan iyi olur.
-reactjs.org  www.reactjs.org
-Facebook geliştirdi 2011.Nasıl olurda çok fazla gereksiz renderi nasıl azaltırız. Sayfada bir beğeni yüzünden herşey render edilmesin.Hızlı olması.Google seo açısından sıkıntı.
-Companent(bileşen)-based bir library. html css js bu companentte mesela recester sayfası yaptım.Yaptığım butonu mesela her yerde kullanabilirim.
-ES6 kullanıyor.Babel compailer kullanıyor.Eski versiyonlara çeviriliyor.
-Dizayn-patent mvs,solid,dry,singeler paten
-next.js reactın bir freamworku burayı öğren
-Gereksiz renderleri minimalize ediyor
-Dizayn patent bir projeye nasıl başlanır, nasıl daha verimli olur. MVC en eskisi ama hala kullanılıyor. Üç temel katmanı var. Model view controller. Model bacend tarafı. Contoreller genelli becadte dahildir. Verileri alıp view tarafına yani uı tarafına veriyor.Viewdan gelen ham veriler contoreller kısmından geçerek modele gelir.Tam terside olur. Yeni bir view katmanı oluşturursam mesela react kalktı.
-VIRTUAL DOM domun kullanıcı belleklerinde saklanmış hali. Normal dom çok zaman kaybettiriyor.Sayfayı yavaşlatıyor. Domun kopyalarına diff (farksal algoritma)algoritması ile karşılaştırıp ilgili kompanentleri güncelliyor.Değişen kısımları algılıyor. Tamamne yapay zeka değil developerada iş düşüyor. Mesela reaact bütün elementleri statik kabul ediyor.Biz tanımlıyoruz.
-Virtual Dom, gerçek dom'un sanal bir kopyasıdır.
Bunu bellekte tutuyoruz
Kıyaslama algoritması ile kıyaslama yapıyoruz
Değişiklikleri alğılayıp Dom' a basıyoruz.
Dolayısıyla manipülasyonları azaltmış oluyoruz
Manipülasyonlar çok fazla zaman kaybettirdiği için rEACT BUNDAN TASARRUF ETMİŞ OLUYOR
-Dom apisinin obje formatında screeneni alıp clıent ramine yüklüyor.Kopyadaki değişikliği ekliyor
-npm uygulamalara erişiyoruz burdan.Play store gibi.Ama biz react uygulamalarında yarn ı tercih ediyoruz. npm i -global yarn   
-npx create-react-app first-react-app     clt c durdur
yarn create react-app first-app
-package.json projenin müdürü gibi
-npm i boostrap yarn add axios ile yeni bir kütüphane ekliyorum.
assest resim vs
companent hazırladığım buton
constants bazı global değişkenler
contexts propların merkezi elden paylaşımı
npm install sass       packedjsona düşüyor bunlar