import type { ReactNode, RefObject } from 'react'

interface layoutProps {
    children: ReactNode;
    ref?: RefObject<HTMLDivElement>;
}

const SectionLayout = ({ children, ref }: layoutProps) => {
    return (
        <section className='py-20 px-40'>
            {children}
        </section>
    )
}

export default SectionLayout
