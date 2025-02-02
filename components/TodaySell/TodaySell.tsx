"use client"
import React from 'react';
import SectionTitle from '../SectionTitle';
import SellSlider from './SellSlider';
import { Button } from '@nextui-org/button';

const TodaySell = () => {
    return (
        <section className='my-32'>
            <SectionTitle title="Today's"/>
            <div className="">
                <SellSlider/>
                <Button className='mx-auto block' radius='none' variant='solid' color='danger'>View All Products</Button>
            </div>
        </section>
    );
};

export default TodaySell;