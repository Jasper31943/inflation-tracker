// U.S. dataset for the English version. Filled by the product engineer from BLS CPI-U (U.S. city average, NSA).
// rate = YoY % (Sept 2026 vs Sept 2025 index), weight = relative importance (Dec 2025, % of CPI-U).
// Engineer: fill rate/weight for any null item; update period + official (All items YoY %) each month. Keep rate:null if unknown -> shows "Data pending".
// Sources: https://api.bls.gov/publicAPI/v1/timeseries/data/  https://www.bls.gov/cpi/tables/relative-importance/2025.htm
window.CPI_DATA_US={
 source:"U.S. BLS CPI-U, Sept 2026 vs Sept 2025, not seasonally adjusted",period:"Sept 2026",official:3.74,
 items:[
  {key:"Groceries",icon:"🛒",cpi:"Food at home",rate:1.81,weight:8.325},
  {key:"Dining out",icon:"🍽️",cpi:"Food away from home",rate:3.46,weight:5.373},
  {key:"Rent",icon:"🏠",cpi:"Rent of primary residence",rate:2.78,weight:7.840},
  {key:"Gas",icon:"⛽",cpi:"Gasoline (all types)",rate:34.17,weight:2.895},
  {key:"Public transit",icon:"🚌",cpi:"Public transportation",rate:15.57,weight:1.485},
  {key:"Household goods",icon:"🧴",cpi:"Housekeeping supplies",rate:1.19,weight:0.847},
  {key:"Utilities",icon:"💡",cpi:"Household energy",rate:6.16,weight:3.402}
 ]};
