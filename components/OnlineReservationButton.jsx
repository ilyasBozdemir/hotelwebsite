import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";

const OnlineReservationButton = () => {
    return (
        <>
            <Link href={'/rezervasyon'} passHref >
                <Button
                    leftIcon={<CiCalendarDate />}
                    cursor={"pointer"}
                    textTransform='uppercase'
                    fontWeight={'semibold'}
                    colorScheme={'red'}
                >
                    Online Rezervasyon
                </Button>
            </Link>
        </>
    );
};

export default OnlineReservationButton;
