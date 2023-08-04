import React, { useState } from 'react';
import { useTranslation, Trans, I18nextProvider } from 'react-i18next';

const Language = () => {
    const { t, i18n } = useTranslation();
    const [numApples, setNumApples] = useState(0);

    const toggleLang = () => {
        // overly simplistic way of toggling between 3 languages
        switch (i18n.language) {
            case 'en':
                i18n.changeLanguage('es');
                break;
            case 'es':
                i18n.changeLanguage('zh');
                break;
            default:
                i18n.changeLanguage('en');
                break;
        }
    }

    const toggleApples = () => {
        setNumApples((numApples + 1) % 4);
    }
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                <div className="App">
                    <h1>
                        <Trans i18nKey="header.welcome">Welcome!</Trans>
                    </h1>
                    <p>
                        {t('home.quantity_display', { defaultValue: "You have {numApples, plural, one {1 apple} other {{numApples} apples}}.", numApples })}
                    </p>
                    <button onClick={toggleLang}>EN ES ZH</button>
                    <button onClick={toggleApples}>++</button>
                </div>
            </I18nextProvider>
        </div>
    )
}

export default Language
