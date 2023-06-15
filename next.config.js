/* @type {import('next').NextConfig} */
const hostnames = [
  'placeimg.com',  
  'api.lorem.space',
  'placeimh.com',
  'picsum.photos',
  'upcdn.io',
  'www.elgrafico.com.ar',
  'api.escuelajs.co',
  'educacion30.b-cdn.net',
  'img.freepik.com'
]


const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
        hostname
    }))   
  },
  /*swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  //basePath: '/dist',
  compress: true,
  async redirects(){
    return [
      {
        source: '/hola',
        destination: 'https://juandied.github.io/vitrina/',
        permanent: true,
      }
    ]
  }*/
  
}
const withPWA = require('next-pwa')({
  
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  
}); 

module.exports =  withPWA(nextConfig);

