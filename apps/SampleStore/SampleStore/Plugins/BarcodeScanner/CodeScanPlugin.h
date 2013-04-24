//
//  CodeScanPlugin.h
//  SampleStore
//
//  Created by Hari Chinthalapale on 4/21/13.
//
//

#import <Cordova/CDVPlugin.h>

@interface CodeScanPlugin : CDVPlugin<ZBarReaderDelegate>

#pragma mark - Instance methods

//Instance Method
- (void) scan:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void)getResult:(CDVInvokedUrlCommand*)command;

@end
