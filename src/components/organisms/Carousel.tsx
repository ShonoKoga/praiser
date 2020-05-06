import React from 'react';
import SnapCarousel from 'react-native-snap-carousel';
import CarouselItem from '../molecules/CarouselItem';
import { width } from '../../lib/window';

type Props = {
  onEnd: () => void;
  onNext: () => void;
  carouselRef: any;
  onSnapToItem: (slide: number) => void;
  data: { text: string }[];
};

const Component: React.FC<Props> = props => {
  const { onEnd, onNext, onSnapToItem, carouselRef, data } = props;
  return (
    <SnapCarousel
      data={data}
      ref={carouselRef}
      renderItem={({ item, index }) => (
        <CarouselItem
          item={item}
          onPress={index === data.length - 1 ? onEnd : onNext}
        />
      )}
      sliderWidth={width}
      itemWidth={width}
      onSnapToItem={onSnapToItem}
    />
  );
};

export default Component;
