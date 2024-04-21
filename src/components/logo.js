import icon_logo from '../assets/icons/icon_logo.svg';
import './logo.css';
// renders logo
export default {
  cacheDOM() {
    this.logoContainer = document.querySelector('.container');
  },
  bindEvents() {},
  render() {
    const container = document.createElement('div');
    container.classList.add('container');
    const iconSVG = new Image();
    iconSVG.setAttribute('onload', 'SVGInject(this)');
    iconSVG.src = icon_logo;
    container.appendChild(iconSVG);
    return container;
  },
};
