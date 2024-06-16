import { login } from '@/api/index';

import styles from './index.module.less';

import aboutTotal from '@/assets/aboutTotal.jpg';
import TianfuTotal from '@/assets/TianfuTotal.jpg';

window.console.log(login);

export default {

  render() {
    return (
      <div class={styles.Index}>
        <img src={aboutTotal} style={{ width: '100vw' }} />
        <img src={TianfuTotal} style={{ width: '100vw' }} />
      </div>
    );
  },
};