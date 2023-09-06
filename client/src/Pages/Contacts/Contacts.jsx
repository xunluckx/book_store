import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';
import GoogleMaps from './AdressOnMap/AdressOnMap';

const Contacts = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className={styles.contactsTitle}>{i18n.t('contactsPage.title')}</div>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsContent}>
          <div className={styles.nameContent}>
            <div>{i18n.t('contactsPage.info.nameContent.title')}</div>
            <div>{i18n.t('contactsPage.info.nameContent.description')}</div>
          </div>
          <div className={styles.adressContent}>
            <div>{i18n.t('contactsPage.info.adressContent.title')}</div>
            <div>{i18n.t('contactsPage.info.adressContent.description')}</div>
          </div>
          <div className={styles.phoneContent}>
            <div>{i18n.t('contactsPage.info.phoneContent.title')}</div>
            <div>{i18n.t('contactsPage.info.phoneContent.description')}</div>
          </div>
          <div className={styles.emailContent}>
            <div>{i18n.t('contactsPage.info.emailContent.title')}</div>
            <div>{i18n.t('contactsPage.info.emailContent.description')}</div>
          </div>
          <div className={styles.siteContent}>
            <div>{i18n.t('contactsPage.info.siteContent.title')}</div>
            <div>{i18n.t('contactsPage.info.siteContent.description')}</div>
          </div>
          <div className={styles.companySiteContent}>
            <div>{i18n.t('contactsPage.info.companySiteContent.title')}</div>
            <div>
              {i18n.t('contactsPage.info.companySiteContent.description')}
            </div>
          </div>
          <div className={styles.secondPhoneContent}>
            <div>{i18n.t('contactsPage.info.secondPhoneContent.title')}</div>
            <div>
              {i18n.t('contactsPage.info.secondPhoneContent.description')}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.adressOnMap}>
        <div className={styles.adressTitle}>
          {i18n.t('contactsPage.adressOnMap')}
        </div>
        <GoogleMaps />
      </div>
    </div>
  );
};

export default Contacts;
