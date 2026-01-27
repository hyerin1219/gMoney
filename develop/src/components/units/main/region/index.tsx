import { useState } from 'react';
import { REGION_LIST } from '../../../../common/stores/region';
import { REGION_LIST_ENG } from '../../../../common/stores/region';
import * as A from './styles';

export default function Region() {
    const [activeTab, setActiveTab] = useState('');
    return (
        <A.Content>
            {/* REGION_LIST */}
            <A.HalfBox>
                <A.RegionBox>
                    {REGION_LIST.map((el, index) => (
                        <A.RegionButton key={el.name}>
                            {el.name}
                            <A.RegionBorder className="border-line" />
                        </A.RegionButton>
                    ))}
                </A.RegionBox>
            </A.HalfBox>

            {/*  */}
            <A.HalfBox>
                {REGION_LIST_ENG.map((el, index) => (
                    <div key={el.name}>
                        <A.Logo src={`/images/logo/${el.name}.png`} alt="" />
                    </div>
                ))}
            </A.HalfBox>
        </A.Content>
    );
}
