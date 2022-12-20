export interface ProductModel {
  id: string;
  fotos: [
    {
      titulo: string;
      src: string;
    }
  ];
  nome: string;
  preco: string;
}
