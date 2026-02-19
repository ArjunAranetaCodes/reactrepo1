import classNames from 'classnames';

const Logo = ({ width = 27, text = true, textClass, className }) => {
  return (
    <div className={classNames(className, 'd-flex align-items-center')}>
      <div 
        style={{ 
          width: width, 
          height: width, 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: `${width * 0.6}px`
        }}
      >
        P
      </div>
      {text && (
        <p className={classNames(textClass, 'logo-text ms-2 mb-0 fw-bold')} style={{ fontSize: '1.25rem' }}>
          Spark & Shine
        </p>
      )}
    </div>
  );
};

export default Logo;
