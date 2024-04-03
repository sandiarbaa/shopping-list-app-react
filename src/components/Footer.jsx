const Footer = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className="px-5 text-center font-semibold">
        Daftar belanjaan masih kosong!
      </footer>
    );

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <>
      <footer className="px-5 text-center text-sm -mt-3 font-semibold">
        Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
        dibeli ({percentage}%).
      </footer>
    </>
  );
};

export default Footer;
