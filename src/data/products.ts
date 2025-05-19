import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Base Lumina',
    description: 'Cabeceira estofada com design elegante e acabamento premium que se adapta a qualquer ambiente.',
    imageUrl: '/src/img/base estofaria.jpg',
    category: 'bases'
  },
  {
    id: '2',
    name: 'Cama Prestige',
    description: 'Design contemporâneo padrão estofaria com elegantes pés de metal.',
    imageUrl: '/src/img/cama prestige colchoaria cab bucle.jpg',
    category: 'camas'
  },
  {
    id: '3',
    name: 'Box Baú Ultra',
    description: 'Box Baú com sistema de pistão a gás e acabamento de alta qualidade.',
    imageUrl: '/src/img/bau ultra sem colchao basalto com cab.jpg',
    category: 'box-bau'
  },
  {
    id: '4',
    name: 'Box Baú Ultra',
    description: 'Espaço de armazenamento amplo com acabamento premium e resistência extra.',
    imageUrl: '/src/img/bau ultra basalto cab.jpg',
    category: 'box-bau'
  },
  {
    id: '6',
    name: 'Base Riviera',
    description: 'Estrutura anatômica com tecido antiácaro e acabamento elegante.',
    imageUrl: '/src/img/camabase tatame cab.jpg',
    category: 'bases'
  },
  {
    id: '8',
    name: 'Cama Elegance',
    description: 'Conjunto completo com estrutura reforçada e design que une conforto e sofisticação.',
    imageUrl: '/src/img/base Lumina1.jpg',
    category: 'camas'
  },
  {
    id: '9',
    name: 'Box Baú Ultra',
    description: 'Box Baú com sistema de pistão a gás reforçado e acabamento premium em tecidos especiais.',
    imageUrl: '/src/img/bau amianto ultra com cab.jpg',
    category: 'box-bau'
  },
  {
    id: '10',
    name: 'Box Baú Ultra',
    description: 'Espaço de armazenamento ampliado com sistema de elevação suave e acabamento luxuoso.',
    imageUrl: '/src/img/bau ultra amianto cab.jpg',
    category: 'box-bau'
  },
  {
    id: '11',
    name: 'Cabeceira Vitória Corano',
    description: 'Cabeceira elegante em tecido Corano com design clássico e acabamento sofisticado.',
    imageUrl: '/src/img/cab vitoria nude.jpg',
    category: 'cabeceiras'
  },
  {
    id: '12',
    name: 'Cabeceira Vitória Dart',
    description: 'Design moderno com padrão geométrico e estofamento premium em tecido Dart.',
    imageUrl: '/src/img/cab vitoria basalto.jpg',
    category: 'cabeceiras'
  },
  {
    id: '13',
    name: 'Cabeceira Vitória Buclê',
    description: 'Textura única em tecido buclê com design contemporâneo e conforto excepcional.',
    imageUrl: '/src/img/cab vitoria bucle durango.jpg',
    category: 'cabeceiras'
  },
  {
    id: '14',
    name: 'Cabeceira Thay Premium',
    description: 'Acabamento refinado com detalhes em capitonê e tecido premium antiácaro.',
    imageUrl: '/src/img/cab thay amianto.jpg',
    category: 'cabeceiras'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};