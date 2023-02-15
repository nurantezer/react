//*public klasörüne koyduklarımı doğrudan kullanabiliyorum.
import "./Content.css"
const Content = () => {
 
    const imgStyle ={
    display: "block",
    margin: "1rem auto",
    width: "300px"
    
}
    return (
      <div className="content-div">
        <img
          style={imgStyle}
          src="https://cdn1.dokuzsoft.com/u/incikitap/img/c/v/a/vadideki-zambake10ff719163c2a0aa463430e24443a35.jpg"
          alt=""
        />
        <p className="content">
          Aristokrat bir ailenin küçük çocuğu olan Félix de Vandenesse, zayıf ve
          çelimsiz bir çocuktur. İki ablası ve ağabeyine öncelik verilen
          ailesinde, sevgiden yoksun bir şekilde yatılı okullarda yetişmiştir.
          Yüksek öğrenimi için Paris'te kalırken siyasal ortamın karışmasından
          dolayı ailesi onu Tours'a çağırmıştır. Tours'a ailesinin yanına
          döndükten sonra, katıldığı bir baloda karşılaştığı ve güzelliğiyle
          kendisini büyüleyen Madam Henriette de Mortsauf'a aşık olur.[1]
          Balodan sonraki günlerde ruh halindeki değişimden endişelenen annesi,
          dinlenmesi için onu bir dostunun yanına, büyüleyici güzelliğiyle
          insana dinginlik veren Indre vadisindeki Frapesle Şatosu'nun sahibi
          olan Mösyö de Chessel'in yanına gönderir. Félix bu eşsiz vadiye
          geldiğinde, sevdiği kadının burada yaşadığını düşünür ve çok geçmeden
          yanılmadığını anlar. Ev sahibinin yardımıyla kadının yaşadığı
          Clochegour Şatosu'na ziyaretçi olarak gider. Madam de Mortsauf'un evli
          ve iki çocuk annesi olduğunu öğrenir. Zamanla evin sahibi Mösyö de
          Mortsauf ve Madam de Mortsauf'la yakın ilişkiler kurar. Bir fırsatını
          bulduğunda ise ona duygularını itiraf eder. Duyguları karşılıksız
          değildir fakat erdem sahibi kadın, kocasına ve çocuklarına ihanet
          etmemek için Félix'e karşılık vermez. Madam de Mortsauf'un çocukluğu
          da Félix'in çocukluğuna benzemektedir: Ailesindeki iki erkek çocuğun
          ölümünden sonra dünyaya gelen kadın, annesinden sevgi görememiştir
          fakat manevi annesi olan teyzesi ona anne sevgisiyle yaklaşmıştır.
          Madam de Mortsauf, Félix'e kendisini teyzesi gibi sevmesini söyler ve
          kendisine teyzesinin söylediği gibi Henriette diye seslenmesini ister.
          Genç adam bu istek üzerine tutkulu isteklerini bastırır ve kadının bu
          isteğini yerine getirir. Altı ay boyunca kol kola gezdikleri eşsiz
          vadide aşkları böyle devam eder.
        </p>
      </div>
    );
}

export default Content