
import Link from 'next/link'
import React from 'react'
import {useTranslations} from 'next-intl';

const Connect3 = () => {
  const t = useTranslations('ContactPage');

  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      {/* Üst Çizgi kaldırıldı veya başka yerde kullanılabilir */}

      {/* Başlık */}
      <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-marcellus font-normal text-center mt-5 mb-5">
       {t("addressShort")}
      </h2>

      {/* Yatay çizgi: Başlığın hemen altında */}
      <hr className="w-full max-w-4xl border-gray-300 mb-6 mx-auto" />

      {/* Adres Metni */}
      <Link href="https://maps.app.goo.gl/usJ9fRr3Po35C3bw8"   rel="norefferer nofollower"
                  target="_blank"  className="text-center text-lagoBlack font-normal font-jost text-[14px] lg:text-[16px] leading-[24px] mb-12 underline">
      Avsallar Mah. İncekum Cad. No:76 Alanya / Turkey
      </Link>

      {/* Harita Alanı */}
      <div className="w-full max-w-[1106px] h-[620px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.916722306044!2d31.80944111257551!3d36.60398199660002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcafa33ce0b9c1%3A0x86f5a8ec94c20883!2sWyndham%20Alanya!5e0!3m2!1str!2str!4v1767957016706!5m2!1str!2str"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
    </div>
  )
}

export default Connect3
