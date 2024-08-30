interface Separator {
    type: 'separator';
    label: string;
  };
  
interface Choice<T> {
    type: 'choice';
    value: T;
    label: string;
}

export { Separator, Choice };
