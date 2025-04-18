import { useTranslation } from 'react-i18next';
// utils
import localStorageAvailable from '../utils/localStorageAvailable';
// components
import { useSettingsContext } from '@zelibot/zeligate-ui';
//
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------
// All rights reserved - SEDZ PTY LTD - 2023
// ----------------------------------------------------------------------

export default function useLocales() {
	const { i18n, t: translate } = useTranslation();

	const { onChangeDirectionByLang } = useSettingsContext();

	const storageAvailable = localStorageAvailable();

	const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';

	const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

	const handleChangeLanguage = (newlang) => {
		i18n.changeLanguage(newlang);
		onChangeDirectionByLang(newlang);
	};

	return {
		onChangeLang: handleChangeLanguage,
		translate: (text, options) => translate(text, options),
		currentLang,
		allLangs,
	};
}
