export const Services = (props) => {
  console.log(props);
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h1>{props.data.themeName}</h1>
        </div>
        <div className='row'>
          {props.data.categories
            ? props.data.categories.map((c, i) => (
                <div key={`${c.categoryName}-${i}`} className='col-md-6'>
                  {' '}
                  <div className='service-desc'>
                    <h3>{c.categoryName}</h3>


                    <div className='row'>
                      {c.subcategories
                        ? c.subcategories.map((sc, i) => (
                            <div key={`${sc.subcategoryName}-${i}`} className='col-md'>
                              {' '}
                              <div className='service-desc'>
                                <h4>{sc.subcategoryName}</h4>
                                

                                <div className='row'>
                                  {sc.misconceptions
                                    ? sc.misconceptions.map((m, i) => (
                                        <div key={`1000-${i}`} className='col-md'>
                                          {' '}
                                          <div className='service-desc'>
                                            {/* <h3>{m.text}</h3> */}
                                            <div dangerouslySetInnerHTML={{ __html: m.html }} />
                                          </div>
                                        </div>
                                      ))
                                    : 'loading'}
                                </div>


                              </div>
                            </div>
                          ))
                        : 'loading'}
                    </div>


                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
