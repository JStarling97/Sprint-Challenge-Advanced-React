import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode(key, initalValue) {
    const [someValue, setSomeValue] = useLocalStorage('ket', false);

    useEffect(() => {
        const body = document.querySelector('body')
        if(someValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}