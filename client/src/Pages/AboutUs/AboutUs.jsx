import { useTranslation } from 'react-i18next';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.AboutUsWrapper}>
      <div className={styles.AboutUsTitle}>{i18n.t('aboutUsPage.title')}</div>
      <div className={styles.aboutUsInfoWrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionTitle}>
            {i18n.t('aboutUsPage.description.descriptionTitle')}
          </div>
          <div className={styles.descriptionText}>
            {i18n.t('aboutUsPage.description.descriptionText')}
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.priceInfoWrapper}>
            <div className={styles.priceInfoTitle}>
              {i18n.t('aboutUsPage.info.price.title')}
            </div>
            <div className={styles.priceInfoText}>
              {i18n.t('aboutUsPage.info.price.item1')}
            </div>
            <div className={styles.priceInfoText}>
              {i18n.t('aboutUsPage.info.price.item2')}
            </div>
          </div>
          <div className={styles.scheduleInfoWrapper}>
            <div className={styles.scheduleTitle}>
              {i18n.t('aboutUsPage.info.schedule.title')}
            </div>
            <div className={styles.scheduleText}>
              {i18n.t('aboutUsPage.info.schedule.item1')}
            </div>
            <div className={styles.scheduleText}>
              {i18n.t('aboutUsPage.info.schedule.item2')}
            </div>
          </div>
          <div className={styles.deliveryInfoWrapper}>
            <div className={styles.deliveryTitle}>
              {i18n.t('aboutUsPage.info.delivery.title')}
            </div>
            <div className={styles.deliveryNova}>
              {i18n.t('aboutUsPage.info.delivery.deliveryNova')}
            </div>
            <div className={styles.deliveryUkr}>
              {i18n.t('aboutUsPage.info.delivery.deliveryUkr')}
            </div>
            <div className={styles.deliveryCourier}>
              {i18n.t('aboutUsPage.info.delivery.deliveryCourier')}
            </div>
          </div>
        </div>
        <div className={styles.companyInfoWrapper}>
          <div className={styles.companyTitle}>
            {i18n.t('aboutUsPage.companyInfo.title')}
          </div>
          <div className={styles.companyNameInfo}>
            <div className={styles.companyNameTitle}>
              {i18n.t('aboutUsPage.companyInfo.name.title')}
            </div>
            <div className={styles.companyNameDescription}>
              {i18n.t('aboutUsPage.companyInfo.name.description')}
            </div>
          </div>
          <div className={styles.companyTypeInfo}>
            <div className={styles.companyTypeTitle}>
              {i18n.t('aboutUsPage.companyInfo.type.title')}
            </div>
            <div className={styles.companyTypeDescription}>
              {i18n.t('aboutUsPage.companyInfo.type.description')}
            </div>
          </div>
          <div className={styles.companyBrandsInfo}>
            <div className={styles.companyBrandsTitle}>
              {i18n.t('aboutUsPage.companyInfo.brands.title')}
            </div>
            <div className={styles.companyBrandsDescription}>
              {i18n.t('aboutUsPage.companyInfo.brands.description')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
