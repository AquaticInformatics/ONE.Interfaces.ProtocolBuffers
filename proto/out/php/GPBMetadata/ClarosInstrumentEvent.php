<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_event.proto

namespace GPBMetadata;

class ClarosInstrumentEvent
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\ClarosCommonDatetime::initOnce();
        \GPBMetadata\ClarosInstrumentEventMetadata::initOnce();
        \GPBMetadata\ClarosInstrumentCalibration::initOnce();
        \GPBMetadata\ClarosInstrumentPrognosys::initOnce();
        $pool->internalAddGeneratedFile(hex2bin(
            "0ad6040a1d636c61726f735f696e737472756d656e745f6576656e742e70" .
            "726f746f1211636c61726f732e696e737472756d656e741a26636c61726f" .
            "735f696e737472756d656e745f6576656e745f6d657461646174612e7072" .
            "6f746f1a23636c61726f735f696e737472756d656e745f63616c69627261" .
            "74696f6e2e70726f746f1a21636c61726f735f696e737472756d656e745f" .
            "70726f676e6f7379732e70726f746f22a9030a0f496e737472756d656e74" .
            "4576656e7412340a0c63616c6962726174696f6e7318012003280b321e2e" .
            "636c61726f732e696e737472756d656e742e43616c6962726174696f6e12" .
            "300a066572726f727318022003280b32202e636c61726f732e696e737472" .
            "756d656e742e4576656e744d65746144617461122e0a04696e666f180320" .
            "03280b32202e636c61726f732e696e737472756d656e742e4576656e744d" .
            "6574614461746112300a066c696d69747318042003280b32202e636c6172" .
            "6f732e696e737472756d656e742e4576656e744d6574614461746112330a" .
            "0972656d696e6465727318052003280b32202e636c61726f732e696e7374" .
            "72756d656e742e4576656e744d6574614461746112320a087761726e696e" .
            "677318062003280b32202e636c61726f732e696e737472756d656e742e45" .
            "76656e744d6574614461746112330a0970726f676e6f7379731807200328" .
            "0b32202e636c61726f732e696e737472756d656e742e50726f676e6f7379" .
            "7344617461122e0a0d6576656e744461746554696d6518082001280b3217" .
            "2e636c61726f732e636f6d6d6f6e2e4461746554696d65620670726f746f" .
            "33"
        ), true);

        static::$is_initialized = true;
    }
}

