<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_limit_type.proto

namespace Claros\Common\Core;

use UnexpectedValueException;

/**
 * Protobuf type <code>claros.common.core.LimitType</code>
 */
class LimitType
{
    /**
     * Generated from protobuf enum <code>L_UNKNOWN = 0;</code>
     */
    const L_UNKNOWN = 0;
    /**
     * Generated from protobuf enum <code>L_HIGHALARM = 1;</code>
     */
    const L_HIGHALARM = 1;
    /**
     * Generated from protobuf enum <code>L_HIGHNEAR = 2;</code>
     */
    const L_HIGHNEAR = 2;
    /**
     * Generated from protobuf enum <code>L_LOWNEAR = 3;</code>
     */
    const L_LOWNEAR = 3;
    /**
     * Generated from protobuf enum <code>L_LOWALARM = 4;</code>
     */
    const L_LOWALARM = 4;

    private static $valueToName = [
        self::L_UNKNOWN => 'L_UNKNOWN',
        self::L_HIGHALARM => 'L_HIGHALARM',
        self::L_HIGHNEAR => 'L_HIGHNEAR',
        self::L_LOWNEAR => 'L_LOWNEAR',
        self::L_LOWALARM => 'L_LOWALARM',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

