import LoginBase from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';
import LoginPage1 from '@react-login-page/page1';
import LoginPage2 from '@react-login-page/page2';
import bannerImage from '@react-login-page/page2/banner-image';
import LoginPage3 from '@react-login-page/page3';
import bannerImage3 from '@react-login-page/page3/banner-image';
import LoginPage4 from '@react-login-page/page4';
import Login5 from '@react-login-page/page5';

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
    <LoginPage4>
      <LoginPage4.Logo>
        <LoginLogo />
      </LoginPage4.Logo>
    </LoginPage4>
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
