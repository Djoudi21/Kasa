import Copyright from "./Copyright";

export default function Footer({screenSize}) {
    return (
        <>
            {
                screenSize > 1200 ? (
                    <Copyright width={400} height={30} />
                ) : (
                    <Copyright width={250} height={23} />
                )
            }
        </>
    );
}
