//
//  CodeScanPlugin.m
//  SampleStore
//
//  Created by Hari Chinthalapale on 4/21/13.
//
//

#import "CodeScanPlugin.h"

@implementation CodeScanPlugin

//Instance Method
- (void) scan:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options; {
    // ADD: present a barcode reader that scans from the camera feed
    ZBarReaderViewController *reader = [ZBarReaderViewController new];
    reader.readerDelegate = self;
    reader.supportedOrientationsMask = ZBarOrientationMaskAll;
    
    ZBarImageScanner *scanner = reader.scanner;
    // TODO: (optional) additional reader configuration here
    
    // EXAMPLE: disable rarely used I2/5 to improve performance
    [scanner setSymbology: ZBAR_I25
                   config: ZBAR_CFG_ENABLE
                       to: 0];
    
    reader.modalPresentationStyle = UIModalPresentationFormSheet;
    
    
    [self.viewController presentViewController:reader animated:YES completion:^{
        NSLog(@"Display payment view");
    }];

}

#pragma mark -
#pragma mark ZBarDelegate

- (void) imagePickerController: (UIImagePickerController*) reader
 didFinishPickingMediaWithInfo: (NSDictionary*) info
{
    // ADD: get the decode results
    id<NSFastEnumeration> results =
    [info objectForKey: ZBarReaderControllerResults];
    ZBarSymbol *symbol = nil;
    for(symbol in results)
        // EXAMPLE: just grab the first barcode
        break;
    
    // EXAMPLE: do something useful with the barcode data
    NSLog(@"%@", symbol.data);
    
    // EXAMPLE: do something useful with the barcode image
    //resultImage.image = [info objectForKey: UIImagePickerControllerOriginalImage];
    
    // ADD: dismiss the controller (NB dismiss from the *reader*!)
    [reader dismissViewControllerAnimated:YES completion:^{
        NSLog(@"reader Dismissed");
    }];
}


@end
