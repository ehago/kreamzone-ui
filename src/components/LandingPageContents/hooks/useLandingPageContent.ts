/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { getDropped, IDropped } from '@libs/apis/landing';
import useLoading from '@hooks/useLoading';

function useLandingPageContent() {
  const [droppedList, setDroppedList] = useState<IDropped[]>([]); // 발매상품
  const [popularList, setPopularList] = useState<IDropped[]>([]); // 인기상품
  const [recommendedList, setRecommendedList] = useState<IDropped[]>([]); // 추천상품
  const [loading, startLoad, endLoad] = useLoading();

  // 발매 상품 가져오기
  const fetchDroppedList = useCallback(async () => {
    const data = await getDropped();
    return data;
  }, []);

  // 마운트시 전체 상품 가져오기
  useEffect(() => {
    const fetchAll = async () => {
      startLoad();
      const [_droppedList] = await Promise.all([fetchDroppedList()]);
      // 1. 발매상품
      setDroppedList(_droppedList);
      // 2. 인기상품
      // setPopularList();
      // 3. 추천상품
      // setRecommendedList();
      endLoad();
    };

    fetchAll();
  }, []);

  return {
    isLoading: !!loading,
    droppedList,
    popularList,
    recommendedList,
  };
}

export default useLandingPageContent;
