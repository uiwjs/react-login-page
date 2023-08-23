import { CSSProperties } from 'react';
import LoginBase from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';
import LoginPage1 from '@react-login-page/page1';
import LoginPage2 from '@react-login-page/page2';
import bannerImage from '@react-login-page/page2/banner-image';
import LoginPage3 from '@react-login-page/page3';
import bannerImage3 from '@react-login-page/page3/banner-image';
import Login4 from '@react-login-page/page4';
import Login5 from '@react-login-page/page5';
import Login6 from '@react-login-page/page6';
import Login7 from '@react-login-page/page7';
import Login8 from '@react-login-page/page8';
import Login9 from '@react-login-page/page9';
import Login9Bg from '@react-login-page/page9/bg.jpg';
import Login10 from '@react-login-page/page10';
import Login10Img from '@react-login-page/page10/bg.png';
import Login10InnerBgImg from '@react-login-page/page10/inner-bg.jpg';
import Login11 from '@react-login-page/page11';
import Login11BannerBgImg from '@react-login-page/page11/banner.jpg';

interface Example {
  magnify?: number;
  children?: JSX.Element;
}

export const base: Example = {
  magnify: 1.3,
  children: (
    <LoginBase>
      <LoginBase.Logo>
        <LoginLogo />
      </LoginBase.Logo>
    </LoginBase>
  ),
};

export const page1: Example = {
  children: (
    <LoginPage1>
      <LoginPage1.Logo>
        <LoginLogo />
      </LoginPage1.Logo>
    </LoginPage1>
  ),
};

export const page2: Example = {
  magnify: 3.3,
  children: (
    <LoginPage2>
      <LoginPage2.Banner>
        <img src={bannerImage} alt="banner" />
      </LoginPage2.Banner>
      <LoginPage2.Logo>
        <LoginLogo />
      </LoginPage2.Logo>
    </LoginPage2>
  ),
};

export const page3: Example = {
  children: (
    <LoginPage3>
      <LoginPage3.Banner style={{ backgroundImage: `url(${bannerImage3})` }} />
      <LoginPage3.Logo>
        <LoginLogo />
      </LoginPage3.Logo>
    </LoginPage3>
  ),
};

export const page4: Example = {
  magnify: 2.3,
  children: (
    <Login4>
      <Login4.Logo>
        <LoginLogo />
      </Login4.Logo>
    </Login4>
  ),
};

export const page5: Example = {
  magnify: 1.6,
  children: (
    <Login5>
      <Login5.Logo>
        <LoginLogo />
      </Login5.Logo>
    </Login5>
  ),
};

export const page6: Example = {
  magnify: 2.1,
  children: (
    <Login6>
      <Login6.Logo>
        <LoginLogo />
      </Login6.Logo>
    </Login6>
  ),
};

export const page7: Example = {
  magnify: 1.2,
  children: (
    <Login7>
      <Login7.Logo>
        <LoginLogo />
      </Login7.Logo>
    </Login7>
  ),
};

export const page8: Example = {
  magnify: 2.2,
  children: (
    <Login8>
      <Login8.Logo>
        <LoginLogo />
      </Login8.Logo>
    </Login8>
  ),
};

export const page9: Example = {
  magnify: 2.2,
  children: (
    <Login9 style={{ backgroundImage: `url(${Login9Bg})` }}>
      <Login9.Logo>
        <LoginLogo />
      </Login9.Logo>
    </Login9>
  ),
};

const page10Style = {
  backgroundImage: `url(${Login10Img})`,
  '--login-inner-image': `url("${Login10InnerBgImg}")`,
} as CSSProperties;
export const page10: Example = {
  magnify: 2.5,
  children: (
    <Login10 style={page10Style}>
      <Login10.InnerBox style={{ backgroundImage: `url(${Login10InnerBgImg})` }} />
      <Login10.InnerBox panel="signup" style={{ backgroundImage: `url(${Login10InnerBgImg})` }} />
    </Login10>
  ),
};

export const page11: Example = {
  magnify: 3.2,
  children: (
    <Login11>
      <Login11.Logo>
        <LoginLogo />
      </Login11.Logo>
      <Login11.Banner>
        <img src={Login11BannerBgImg} alt="banner" />
      </Login11.Banner>
    </Login11>
  ),
};
