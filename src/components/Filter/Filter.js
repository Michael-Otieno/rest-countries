import './Filter.css'


function Filter({onSelect}){
  const onSelectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  }

  return (
    <div className="filter">
      <select onChange={onSelectHandler}>
        <option className='option-filter'>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    
  )
}

export default Filter