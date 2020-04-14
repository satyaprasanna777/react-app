import { observable, action, reaction } from 'mobx';
class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = "Light mode"
    }
    @action.bound
    setCurrentTheme() {
        if (this.selectedTheme === 'Light mode')
            this.selectedTheme = "Dark mode"
        else
            this.selectedTheme = "Light mode"
    }
    addTheme = reaction(() => this.selectedTheme, (theme) => console.log(theme))
}
const themeStore = new ThemeStore()
export default themeStore
