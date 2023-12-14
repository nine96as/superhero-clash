import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes } from '../../action-creators/hero';
import { HeroCard } from '../../components';

const CardContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const heroes = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(fetchHeroes());
    console.log(heroes);
  }, []);

  const renderHeroes = heroes.map((hero) => (
    <HeroCard
      key={hero.name}
      name={hero.name}
      image={hero.img}
      stats={hero.stats}
    />
  ));

  return (
    <div>
      {loading ? (
        <h2>Loading . . .</h2>
      ) : (
        <section aria-label='doggos' id='doggos'>
          {renderHeroes}
        </section>
      )}
    </div>
  );
};

export default CardContainer;
