import { useMemo, Fragment } from 'react';
import Scm from 'Hand/scm/scm.jsx';
import './privacyPolicyPage.css'

const PrivacyPolicyPage = ({appConfig, isMobile , config}) => {
  const pageSetup = {
		isMobile,
	};
  	// update style on scroll
	function onScroll(data) {
		updatePos(data);
	}
  const terms = useMemo(() => {
    if(!config) return;
    return config.map(({ title, subtitle, description }, i) => (
      <Fragment key={i}>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <p dangerouslySetInnerHTML={{__html: description}} />
      </Fragment>
    ))
  },[config])

  const navbarHeight = useMemo(() => {
    if(!isMobile) return '6.875rem';
    return '3.25rem';
  } ,[isMobile])

  return (
    <Scm appConfig={appConfig} setup={pageSetup}>
    <div className='privacy-policy' style={{ paddingTop: navbarHeight }}>
      <span className='privacy-policy--background' style={{ height: navbarHeight }} />
      <div className='privacy-policy-container'>
        <h1 className='privacy-policy-container__title'>Privacy Policy</h1>
        <div className='privacy-policy-container__terms'>
          {terms}
        </div>
      </div>
    </div>
    </Scm>
  )
}

export default PrivacyPolicyPage;