import React from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';

import './App.css';

export default () => (
    <div className="container">
        <ReactiveBase
            app="airbeds-test-app"
                        credentials="X8RsOu0Lp:9b4fe1a4-58c6-4089-a042-505d86d9da30"
                    theme={{
                primaryColor: '#FF3A4E',
            }}
        >
            <nav className="nav">
                <div className="title">Pendaftaran Airbnb</div>
                <DataSearch
                    componentId="SensorPencarian"
                    dataField="name"
                    autosuggest={false}
                    placeholder="Pencarian dengan nama rumah"
                    iconPosition="left"
                    className="search"
                    highlight={true}
                />
            </nav>
            <div className="left-col">
                <DateRange
                    dataField="date_from"
                    componentId="SensorTgl"
                    title="Tanggal booking"
                    numberOfMonths={2}
                    queryFormat="basic_date"
                    initialMonth={new Date('04-01-2017')}
                />

                <NumberBox
                    componentId="GuestSensor"
                    dataField="accommodates"
                    title="Jumlah Tamu"
                    defaultSelected={2}
                    labelPosition="right"
                    data={{
                        start: 1,
                        end: 16,
                    }}
                />

                <RangeSlider
                    componentId="PriceSensor"
                    dataField="price"
                    title="Kisaran Harga"
                    range={{
                        start: 140000,
                        end: 3500000,
                    }}
                    rangeLabels={{
                        start: 'Rp 140000',
                        end: 'Rp 3500000',
                    }}
                    defaultSelected={{
                        start: 10,
                        end: 50,
                    }}
                    stepValue={10}
                    interval={20}
                    react={{
                        and: ['DateRangeSensor'],
                    }}
                />
            </div>

            <ResultCard
                className="right-col"
                componentId="SearchResult"
                dataField="name"
                size={12}
                onData={data => ({
                    image: data.image,
                    title: data.name,
                    description: (
                        <div>
                            <div className="price">${data.price}</div>
                            <p className="info">{data.room_type} · {data.accommodates} guests</p>
                        </div>
                    ),
                    url: data.listing_url,
                })}
                pagination
                react={{
                    and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
                }}
                innerClass={{
                    resultStats: 'result-stats',
                    list: 'list',
                    listItem: 'list-item',
                    image: 'image',
                }}
            />
        </ReactiveBase>
    </div>
);
