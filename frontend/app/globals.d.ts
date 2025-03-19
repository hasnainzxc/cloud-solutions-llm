declare module 'framer-motion' {
  // Add any specific types needed from framer-motion
  export const motion: any;
  export type Variants = {
    [key: string]: {
      [key: string]: any;
    };
  };
}

declare module 'react-icons/fa' {
  export const FaServer: React.ComponentType<any>;
  export const FaBolt: React.ComponentType<any>;
  export const FaShieldAlt: React.ComponentType<any>;
  export const FaGlobe: React.ComponentType<any>;
  export const FaArrowRight: React.ComponentType<any>;
  export const FaLinkedin: React.ComponentType<any>;
  export const FaTwitter: React.ComponentType<any>;
  export const FaGithub: React.ComponentType<any>;
  export const FaEnvelope: React.ComponentType<any>;
  export const FaMapMarkerAlt: React.ComponentType<any>;
  export const FaCheck: React.ComponentType<any>;
  export const FaUsers: React.ComponentType<any>;
  export const FaLightbulb: React.ComponentType<any>;
  export const FaRocket: React.ComponentType<any>;
  export const FaChartLine: React.ComponentType<any>;
  export const FaUserFriends: React.ComponentType<any>;
  export const FaUser: React.ComponentType<any>;
  export const FaBriefcase: React.ComponentType<any>;
  export const FaBars: React.ComponentType<any>;
  export const FaTimes: React.ComponentType<any>;
  export const FaCloud: React.ComponentType<any>;
} 