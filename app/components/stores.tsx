import Image from 'next/image'
import React from 'react'
import styles from "./stores.module.css";

const StoresBlock = () => {
  return (
    <div className={styles.storesWrapper}>
        <a href="https://play.google.com/store/apps/details?id=com.quim79.silenceTimer&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <Image
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          width={200}
          height={75}
        />
      </a>
    </div>
  )
}

export default StoresBlock