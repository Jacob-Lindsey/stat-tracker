export default function getDriverInfo(driver) {
    switch (driver) {
        case 'HAM':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/lewham01.png.transform/2col/image.png',
                '--mercedes-bg'
            ];
        case 'BOT':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/valbot01.png.transform/2col/image.png',
                '--mercedes-bg'
            ];
        case 'VER':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/maxver01.png.transform/2col/image.png',
                '--redbull-bg'
            ];
        case 'PER':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/serper01.png.transform/2col/image.png', 
                '--redbull-bg'
            ];
        case 'NOR':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/lannor01.png.transform/2col/image.png', 
                '--mclaren-bg'
            ];
        case 'RIC':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/danric01.png.transform/2col/image.png', 
                '--mclaren-bg'
            ];
        case 'LEC':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/chalec01.png.transform/2col/image.png', 
                '--ferarri-bg'
            ];
        case 'SAI':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/carsai01.png.transform/2col/image.png', 
                '--ferarri-bg'
            ];
        case 'ALO':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/feralo01.png.transform/2col/image.png', 
                '--alpine-bg'
            ];
        case 'OCO':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/estoco01.png.transform/2col/image.png', 
                '--alpine-bg'
            ];
        case 'VET':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/sebvet01.png.transform/2col/image.png', 
                '--alphatauri-bg'
            ];
        case 'STR':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/lanstr01.png.transform/2col/image.png', 
                '--alphatauri-bg'
            ];
        case 'GAS':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/piegas01.png.transform/2col/image.png', 
                '--astonmartin-bg'
            ];
        case 'TSU':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/yuktsu01.png.transform/2col/image.png', 
                '--astonmartin-bg'
            ];
        case 'RUS':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/georus01.png.transform/2col/image.png', 
                '--williams-bg'
            ];
        case 'LAT':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/niclat01.png.transform/2col/image.png', 
                '--williams-bg'
            ];
        case 'RAI':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/kimrai01.png.transform/2col/image.png', 
                '--alfaromeo-bg'
            ];
        case 'GIO':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/antgio01.png.transform/2col/image.png', 
                '--alfaromeo-bg'
            ];
        case 'MSC':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/micsch02.png.transform/2col/image.png', 
                '--haas-bg'
            ];
        case 'MAZ':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/nikmaz01.png.transform/2col/image.png', 
                '--haas-bg'
            ];
        case 'KUB':
            return [
                'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2021/robkub01.png.transform/2col/image.png', 
                '--haas-bg'
            ];
        default:
            break;
    };
};