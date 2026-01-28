export interface Supplier {
  id: string;
  name: string;
  logo: string;
  state: string;
  costPerKwh: number;
  minKwh: number;
  totalClients: number;
  rating: number;
  type: 'GD' | 'MERCADO_LIVRE';
}

export const STATE_BASE_TARIFFS: Record<string, number> = {
  SP: 0.95,
  RJ: 1.10,
  MG: 0.89,
  RS: 0.85,
};

export const SUPPLIERS: Supplier[] = [
  {
    id: '1',
    name: 'EcoPower Energia',
    logo: 'https://ecopower.com.br/_next/static/media/eco-power-logo-art.5c2f403d.svg',
    state: 'SP',
    costPerKwh: 0.80,
    minKwh: 1000,
    totalClients: 1500,
    rating: 4.8,
    type: 'GD',
  },
  {
    id: '2',
    name: 'Livre Energy',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQELksdFHPSigg/company-logo_200_200/company-logo_200_200/0/1630537874300?e=2147483647&v=beta&t=K54NPO9Xq47gLHsLn_A1S7R4QVrb0W6xdEY79z7ySeI',
    state: 'SP',
    costPerKwh: 0.75, 
    minKwh: 10000,
    totalClients: 400,
    rating: 4.5,
    type: 'MERCADO_LIVRE',
  },
  {
    id: '3',
    name: 'Minas Solar',
    logo: 'https://scontent.fpoj7-1.fna.fbcdn.net/v/t39.30808-6/240822761_238821758248767_4909200573834807701_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_7FZAuE4AooQ7kNvwFGnEYM&_nc_oc=AdnKDMQcI-SlVq71kWiJLIJ2tOfO-imwC6_FFbaHTxUjWyaVp_PbPpbUjaQ5ZHG--Io&_nc_zt=23&_nc_ht=scontent.fpoj7-1.fna&_nc_gid=P26cVr-yLqGBiZDlkXygug&oh=00_Afqy5pbGMn6h0R_rlkyJaRDcyBTiVIkSRCzB0vqDGIjJuQ&oe=697FED91',
    state: 'MG',
    costPerKwh: 0.79,
    minKwh: 500,
    totalClients: 2000,
    rating: 4.2,
    type: 'GD',
  },
  {
    id: '4',
    name: 'Global Trading',
    logo: 'https://tint.creativemarket.com/dbngeXax1gWDtJwGlwxNkOaeUbN4l9BAFzUBWdPt5SM/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzQ1MS80NTE2LzQ1MTYxMjkvZ2xvYmFsLXRyYWRpbmctbG9nby1vLmpwZw?1527497062',
    state: 'MG',
    costPerKwh: 0.65,
    minKwh: 30000,
    totalClients: 100,
    rating: 4.9,
    type: 'MERCADO_LIVRE',
  },
    {
    id: '5',
    name: 'Rio Verde',
    logo: 'https://yata-apix-33896151-bdbc-42fe-ab0a-8ccf01b8883e.s3-object.locaweb.com.br/7eabd58e8fc249b0ae0e7dc01e0298de.png',
    state: 'RJ',
    costPerKwh: 0.95,
    minKwh: 2000,
    totalClients: 850,
    rating: 4.0,
    type: 'GD',
  },
];