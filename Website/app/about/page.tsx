import Image from "next/image";

export default function AboutMe() {
  return (
    <main>
      <section>
        <h1>About me</h1>
        <div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacinia dui. Integer scelerisque nibh arcu, eget dictum mauris sodales finibus. Morbi laoreet est ac sapien fermentum bibendum. Proin auctor, risus ut aliquam vehicula, lorem neque luctus turpis, eu convallis elit est vitae dolor. Pellentesque sed semper justo, nec luctus nisl. Ut porta sapien in ex tempor sagittis. Vestibulum iaculis dui dui, eu consequat magna ullamcorper vitae. Duis fermentum cursus odio sed lobortis. Nullam in est est. Sed dignissim libero sed leo efficitur suscipit. Curabitur sollicitudin, lacus sed aliquet sagittis, est augue elementum nibh, vitae eleifend erat velit at sem. Morbi suscipit urna vel sagittis tempor. Donec maximus dignissim facilisis. Suspendisse condimentum, purus eleifend mollis lobortis, tellus dolor ornare arcu, vitae consequat purus dolor nec urna.</p>
            <p>Proin at orci a sem auctor pulvinar eget vel odio. Donec a leo quis ante hendrerit semper quis sed erat. Praesent eleifend massa eget nibh tempus viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ante lacus, commodo non maximus ac, placerat id justo. Sed et enim sollicitudin, commodo erat vitae, suscipit turpis. Integer vitae venenatis ex. Suspendisse elementum purus vitae ligula sagittis maximus. Etiam luctus ex et eros accumsan, lobortis mollis odio semper. Vivamus lacinia, ex eget varius mollis, mi sem bibendum eros, sit amet vehicula ante sem id diam. Ut porta tellus condimentum gravida faucibus. Sed eget erat eget orci ornare mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id euismod justo, vitae imperdiet odio. In non sapien nec elit cursus efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <Image src="/img/others/temp-img.jpg" width={300} height={500} alt="A photo of me, Erjie!" />
        </div>
      </section>
      <section>
        <h1>Contact</h1>
        <div>
          <p>Email: <a href="mailto:erjieisheree@gmail.com">erjieisheree@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/erjie-xia-5b50b72a6/">Erjie Xia</a></p>
          <p>Github: <a href="https://github.com/ErjieIsHeree">ErjieIsHeree</a></p>
        </div>
      </section>
    </main>
  );
}
