<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_timezone.proto

namespace Claros\Common\Core;

use UnexpectedValueException;

/**
 * Protobuf type <code>claros.common.core.TimeZone</code>
 */
class TimeZone
{
    /**
     * Generated from protobuf enum <code>TIMEZONE_UNKNOWN = 0;</code>
     */
    const TIMEZONE_UNKNOWN = 0;
    /**
     * Generated from protobuf enum <code>TIMEZONE_UTC = 1;</code>
     */
    const TIMEZONE_UTC = 1;

    private static $valueToName = [
        self::TIMEZONE_UNKNOWN => 'TIMEZONE_UNKNOWN',
        self::TIMEZONE_UTC => 'TIMEZONE_UTC',
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

