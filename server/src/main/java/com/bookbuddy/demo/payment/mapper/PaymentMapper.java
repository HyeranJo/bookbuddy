package com.bookbuddy.demo.payment.mapper;

import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PaymentMapper {
    default Payment paymentPostDtoToPayment(PaymentDto.Post paymentDto) {
        return new Payment(paymentDto.getShipName(),
                paymentDto.getAddress1(),
                paymentDto.getAddress2(),
                paymentDto.getShipMobile(),
                paymentDto.getShipTel(),
                paymentDto.getCstmrName(),
                paymentDto.getCstmrMobile(),
                paymentDto.getCstmrTel(),
                paymentDto.getEmail());
    }

    default PaymentDto.Response paymentToPaymentResponseDto(Payment payment) {
        List<Long> orders = payment.getOrders().stream()
                .map(e -> e.getId()).collect(Collectors.toList());
        return new PaymentDto.Response(
                payment.getId(),
                orders,
                payment.getShipName(),
                payment.getAddress1(),
                payment.getAddress2(),
                payment.getShipMobile(),
                payment.getShipTel(),
                payment.getCstmrName(),
                payment.getCstmrMobile(),
                payment.getCstmrTel(),
                payment.getEmail());
    }
}
