


const Cursor = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: y - 10,
        left: x - 10,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'white',
mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 1000,
        transition:"0.06s ease-in-out",
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      }}
    />
  );
}
export default Cursor;