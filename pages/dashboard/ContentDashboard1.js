import React from 'react';

function ContentDashboard1() {
  const ContentDashboard1Style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const flexItemStyle = {
    width: '100%',
    // height: '40%',
    backgroundColor: '#fff',
    color: 'black',
    textAlign: 'center',
    borderRadius: '8px',
    display: 'flex', // Tambah display: flex
    flexDirection: 'row', // Tambah flex-direction: row
    alignItems: 'center',
    padding: '25px', // Tambah padding
    margin: '10px',
  };

  const priceStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
        <div style={flexItemStyle}>
          <div style={{ width: '50px', height: '50px', borderRadius: '18px', backgroundColor: '#E7F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', color:'#0F7AAE', }}>
            <i className="pi pi-fw pi-home"></i>
          </div>
          <div style={{ flexDirection:'row' }}>
            Keuntungan
            <div style={priceStyle}>Rp. 5000</div>
          </div>
        </div>
        <div style={flexItemStyle}>
        <div style={{ width: '50px', height: '50px', borderRadius: '18px', backgroundColor: '#EAF9F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', color:'#20BF6B', }}>
            <i className="pi pi-fw pi-home"></i>
          </div>
          <div style={{ flexDirection:'row' }}>
            Penerimaan
            <div style={priceStyle}>Rp. 5000</div>
          </div>
        </div>
        <div style={flexItemStyle}>
        <div style={{ width: '50px', height: '50px', borderRadius: '18px', backgroundColor: '#FDEDF0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', color:'#EB3B5A', }}>
            <i className="pi pi-fw pi-home"></i>
          </div>
          <div style={{ flexDirection:'row' }}>
            Pengeluaran
            <div style={priceStyle}>Rp. 5000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard1;
